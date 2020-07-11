import { Configuration, ServerLoader, ServerSettings } from '@tsed/common';
import { ElderFutharkController } from './controllers/ElderFutharkController';
import bodyParser from 'body-parser';
import path from 'path';

@Configuration({
  mount: {
    '/elderFuthark': ElderFutharkController,
  },
})
@ServerSettings({
  rootDir: path.resolve(__dirname),
  acceptMimes: ['application/json'],
})
export class Server extends ServerLoader {
  public $beforeRoutesInit(): void | Promise<any> {
    this.use(bodyParser.json()).use(
      bodyParser.urlencoded({
        extended: true,
      }),
    );
  }

  public $onReady() {
    console.log('Server started...');
  }

  public $onServerInitError(err: Error) {
    console.error(err);
  }
}

new Server().start();
