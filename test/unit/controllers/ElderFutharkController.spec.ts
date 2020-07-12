import { ElderFutharkController } from '../../../src/controllers/ElderFutharkController';

describe('ElderFutharkController', () => {
  let controller: ElderFutharkController;
  beforeEach(() => {
    controller = new ElderFutharkController();
  });

  describe('find', () => {
    it('should find all runes by default', async () => {
      const runes = await controller.find();
      expect(runes.length).toBe(24);
    });

    describe('filtering by aett', () => {
      it('should filter the "freya" aett', async () => {
        const runes = await controller.find('freya');
        expect(runes.length).toBe(8);
        expect(runes).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ name: 'fehu' }),
            expect.objectContaining({ name: 'uruz' }),
            expect.objectContaining({ name: 'thurisaz' }),
            expect.objectContaining({ name: 'ansuz' }),
            expect.objectContaining({ name: 'raidho' }),
            expect.objectContaining({ name: 'kenaz' }),
            expect.objectContaining({ name: 'gebo' }),
          ]),
        );
      });

      it('should filter the "heimdall" aett', async () => {
        const runes = await controller.find('heimdall');
        expect(runes.length).toBe(8);
        expect(runes).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ name: 'hagalaz' }),
            expect.objectContaining({ name: 'naudhiz' }),
            expect.objectContaining({ name: 'isa' }),
            expect.objectContaining({ name: 'jera' }),
            expect.objectContaining({ name: 'eihwaz' }),
            expect.objectContaining({ name: 'perthro' }),
            expect.objectContaining({ name: 'algiz' }),
            expect.objectContaining({ name: 'sowilo' }),
          ]),
        );
      });

      it('should filter the "tiwaz" aett', async () => {
        const runes = await controller.find('tiwaz');
        expect(runes.length).toBe(8);
        expect(runes).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ name: 'tiwaz' }),
            expect.objectContaining({ name: 'berkano' }),
            expect.objectContaining({ name: 'ehwaz' }),
            expect.objectContaining({ name: 'mannaz' }),
            expect.objectContaining({ name: 'laguz' }),
            expect.objectContaining({ name: 'ingwaz' }),
            expect.objectContaining({ name: 'othala' }),
            expect.objectContaining({ name: 'dagaz' }),
          ]),
        );
      });
    });
  });
});
