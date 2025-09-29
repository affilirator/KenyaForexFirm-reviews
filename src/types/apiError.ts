// For Creating server logs in PayloadCMS
/**
 *
 */
export interface ServerLogs {
  message: string;
  createdAt: Date;
  level?: 'info' | 'warning' | 'error';
}
