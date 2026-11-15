/**
 * Kimya YKS — Toggleable Mobile/Web Notification Manager
 * Milestone 6 (Feature 36)
 *
 * Implements strict opt-in notifications: if enabled is false,
 * all scheduling, timers, and notifications are unconditionally suppressed.
 */

export interface ScheduledNotificationRecord {
  id: string;
  reminderTime: string; // e.g. "20:00"
  title: string;
  body: string;
  timestamp: number;
}

export class NotificationManager {
  private activeTimerId: number | null = null;
  private isCapacitorAvailable: boolean = false;

  constructor() {
    this.checkCapacitorAvailability();
  }

  private checkCapacitorAvailability(): void {
    if (typeof window !== 'undefined' && (window as any).Capacitor) {
      this.isCapacitorAvailable = true;
    }
  }

  /**
   * Returns true if standard Web Notifications or Capacitor notifications are supported.
   */
  public isSupported(): boolean {
    if (typeof window === 'undefined') return false;
    return 'Notification' in window || this.isCapacitorAvailable;
  }

  /**
   * Returns current permission status ('granted', 'denied', 'default', or 'unsupported').
   */
  public getPermissionStatus(): string {
    if (typeof window === 'undefined' || !('Notification' in window)) {
      return 'unsupported';
    }
    return Notification.permission;
  }

  /**
   * Requests user permission for notifications.
   */
  public async requestPermission(): Promise<boolean> {
    if (typeof window === 'undefined') return false;

    // 1. Try Capacitor LocalNotifications if present
    if (this.isCapacitorAvailable && (window as any).Capacitor?.Plugins?.LocalNotifications) {
      try {
        const res = await (window as any).Capacitor.Plugins.LocalNotifications.requestPermissions();
        return res.display === 'granted';
      } catch {
        // Fallback to web
      }
    }

    // 2. Standard Web Notification API
    if ('Notification' in window) {
      try {
        const permission = await Notification.requestPermission();
        return permission === 'granted';
      } catch {
        return false;
      }
    }

    return false;
  }

  /**
   * Sends an immediate notification.
   * STRICT OPT-IN: If `enabled` is false, returns false immediately and suppresses all output.
   */
  public async sendImmediateNotification(
    title: string,
    body: string,
    enabled: boolean
  ): Promise<boolean> {
    if (!enabled) {
      return false; // Suppressed unconditionally
    }

    if (!this.isSupported()) {
      return false;
    }

    // Capacitor LocalNotifications
    if (this.isCapacitorAvailable && (window as any).Capacitor?.Plugins?.LocalNotifications) {
      try {
        await (window as any).Capacitor.Plugins.LocalNotifications.schedule({
          notifications: [
            {
              title,
              body,
              id: Date.now() % 100000,
              schedule: { at: new Date(Date.now() + 500) },
              smallIcon: 'ic_stat_kimya',
            },
          ],
        });
        return true;
      } catch {
        // Fallback to web notification
      }
    }

    // Web Notification API
    if ('Notification' in window) {
      try {
        if (Notification.permission === 'granted') {
          new Notification(title, {
            body,
            icon: '/icon-192.png',
            tag: 'kimya-daily-reminder',
          });
          return true;
        } else if (Notification.permission !== 'denied') {
          const perm = await Notification.requestPermission();
          if (perm === 'granted') {
            new Notification(title, {
              body,
              icon: '/icon-192.png',
              tag: 'kimya-daily-reminder',
            });
            return true;
          }
        }
      } catch {
        return false;
      }
    }

    return false;
  }

  /**
   * Schedules a daily recurring reminder.
   * STRICT OPT-IN: If `enabled` is false, cancels any existing timers and returns false immediately.
   */
  public async scheduleDailyReminder(
    reminderTime: string,
    title: string,
    body: string,
    enabled: boolean
  ): Promise<boolean> {
    this.cancelAllReminders();

    if (!enabled) {
      return false; // Suppressed unconditionally
    }

    if (!this.isSupported()) {
      return false;
    }

    // Parse HH:mm
    const [hourStr, minStr] = reminderTime.split(':');
    const targetHour = parseInt(hourStr || '20', 10);
    const targetMin = parseInt(minStr || '00', 10);

    const now = new Date();
    const scheduledDate = new Date();
    scheduledDate.setHours(targetHour, targetMin, 0, 0);

    if (scheduledDate.getTime() <= now.getTime()) {
      scheduledDate.setDate(scheduledDate.getDate() + 1);
    }

    const delayMs = scheduledDate.getTime() - now.getTime();

    // Schedule next run
    if (typeof window !== 'undefined') {
      this.activeTimerId = window.setTimeout(async () => {
        await this.sendImmediateNotification(title, body, enabled);
        // Reschedule for next day
        this.scheduleDailyReminder(reminderTime, title, body, enabled);
      }, delayMs);
    }

    // Capacitor Native Local Notification Scheduling
    if (this.isCapacitorAvailable && (window as any).Capacitor?.Plugins?.LocalNotifications) {
      try {
        await (window as any).Capacitor.Plugins.LocalNotifications.schedule({
          notifications: [
            {
              title,
              body,
              id: 1001,
              schedule: { at: scheduledDate, repeats: true, every: 'day' },
              smallIcon: 'ic_stat_kimya',
            },
          ],
        });
      } catch {
        // Native schedule failed, web timer remains active
      }
    }

    return true;
  }

  /**
   * Cancels all scheduled reminder timers and clear native notification queues.
   */
  public async cancelAllReminders(): Promise<void> {
    if (typeof window !== 'undefined' && this.activeTimerId !== null) {
      window.clearTimeout(this.activeTimerId);
      this.activeTimerId = null;
    }

    if (this.isCapacitorAvailable && (window as any).Capacitor?.Plugins?.LocalNotifications) {
      try {
        await (window as any).Capacitor.Plugins.LocalNotifications.cancel({
          notifications: [{ id: 1001 }],
        });
      } catch {
        // Ignore cancel errors
      }
    }
  }
}

export const notificationManager = new NotificationManager();
