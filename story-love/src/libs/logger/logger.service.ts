import { Injectable, Logger } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class LoggerService {
  private readonly logger = new Logger(LoggerService.name);
  private readonly logFilePath = path.join(
    process.cwd(),
    'src/common/logs/myapp.log',
  );

  constructor() {
    // Переконуємось, що файл логів існує
    if (!fs.existsSync(path.dirname(this.logFilePath))) {
      fs.mkdirSync(path.dirname(this.logFilePath), { recursive: true });
    }
  }

  async logGraphQLRequest(logData: Record<string, any>) {
    const logEntry = JSON.stringify(logData);

    // Лог у консоль
    this.logger.log(logEntry);

    // Лог у файл
    fs.appendFileSync(this.logFilePath, logEntry + '\n');
  }
}
