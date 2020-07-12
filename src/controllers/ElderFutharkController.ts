import { Controller, Get, QueryParams } from '@tsed/common';
import { IRune } from '../interfaces/IRune';
import { ElderFuthark } from '../classes/ElderFuthark';

@Controller('/elderFuthark')
export class ElderFutharkController {
  private elderFuthark = new ElderFuthark();

  @Get('/find')
  public async find(
    @QueryParams('aett') aett?: string,
    @QueryParams('name') name?: string,
  ): Promise<IRune[]> {
    let retVal: IRune[] = JSON.parse(JSON.stringify(this.elderFuthark.runes));

    if (aett) {
      retVal = this.elderFuthark.runes.filter(rune => rune.aett === aett);
    }
    if (name) {
      retVal = retVal.filter(rune => rune.name === name);
    }

    return retVal;
  }

  @Get('/pull')
  public async pull(@QueryParams('count') count: number) {
    return this.elderFuthark.pull(count);
  }
}
