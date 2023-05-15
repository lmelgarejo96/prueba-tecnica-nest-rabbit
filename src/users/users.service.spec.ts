import { UsersService } from './users.service';
import { HttpService } from "@nestjs/axios"

describe('UsersService', () => {
  let userService: UsersService;

  beforeEach(() => {
    userService = new UsersService(new HttpService());
  });

  describe('getUsers', () => {
    it('Se espera el listado de usuarios sin la propiedad “address” y debe estar ordenado por id (descendente)', async () => {
      const strUsers = JSON.stringify([{"id":10,"company":{"name":"Hoeger LLC","catchPhrase":"Centralized empowering task-force","bs":"target end-to-end models"},"email":"Rey.Padberg@karina.biz","name":"Clementina DuBuque","phone":"024-648-3804","username":"Moriah.Stanton","website":"ambrose.net"},{"id":9,"company":{"name":"Yost and Sons","catchPhrase":"Switchable contextually-based project","bs":"aggregate real-time technologies"},"email":"Chaim_McDermott@dana.io","name":"Glenna Reichert","phone":"(775)976-6794 x41206","username":"Delphine","website":"conrad.com"},{"id":8,"company":{"name":"Abernathy Group","catchPhrase":"Implemented secondary concept","bs":"e-enable extensible e-tailers"},"email":"Sherwood@rosamond.me","name":"Nicholas Runolfsdottir V","phone":"586.493.6943 x140","username":"Maxime_Nienow","website":"jacynthe.com"},{"id":7,"company":{"name":"Johns Group","catchPhrase":"Configurable multimedia task-force","bs":"generate enterprise e-tailers"},"email":"Telly.Hoeger@billy.biz","name":"Kurtis Weissnat","phone":"210.067.6132","username":"Elwyn.Skiles","website":"elvis.io"},{"id":6,"company":{"name":"Considine-Lockman","catchPhrase":"Synchronised bottom-line interface","bs":"e-enable innovative applications"},"email":"Karley_Dach@jasper.info","name":"Mrs. Dennis Schulist","phone":"1-477-935-8478 x6430","username":"Leopoldo_Corkery","website":"ola.org"},{"id":5,"company":{"name":"Keebler LLC","catchPhrase":"User-centric fault-tolerant solution","bs":"revolutionize end-to-end systems"},"email":"Lucio_Hettinger@annie.ca","name":"Chelsey Dietrich","phone":"(254)954-1289","username":"Kamren","website":"demarco.info"},{"id":4,"company":{"name":"Robel-Corkery","catchPhrase":"Multi-tiered zero tolerance productivity","bs":"transition cutting-edge web services"},"email":"Julianne.OConner@kory.org","name":"Patricia Lebsack","phone":"493-170-9623 x156","username":"Karianne","website":"kale.biz"},{"id":3,"company":{"name":"Romaguera-Jacobson","catchPhrase":"Face to face bifurcated interface","bs":"e-enable strategic applications"},"email":"Nathan@yesenia.net","name":"Clementine Bauch","phone":"1-463-123-4447","username":"Samantha","website":"ramiro.info"},{"id":2,"company":{"name":"Deckow-Crist","catchPhrase":"Proactive didactic contingency","bs":"synergize scalable supply-chains"},"email":"Shanna@melissa.tv","name":"Ervin Howell","phone":"010-692-6593 x09125","username":"Antonette","website":"anastasia.net"},{"id":1,"company":{"name":"Romaguera-Crona","catchPhrase":"Multi-layered client-server neural-net","bs":"harness real-time e-markets"},"email":"Sincere@april.biz","name":"Leanne Graham","phone":"1-770-736-8031 x56442","username":"Bret","website":"hildegard.org"}])
      const resultUsers = await userService.getUsers()
      expect(JSON.stringify(resultUsers)).toBe(strUsers);
    });
  });

  describe('getPairUsers', () => {
    it('Se espera el listado de usuarios de ID par sin la propiedad “address” y debe estar ordenado por id (descendente)', async () => {
      const strUsers = JSON.stringify([{"id":10,"company":{"name":"Hoeger LLC","catchPhrase":"Centralized empowering task-force","bs":"target end-to-end models"},"email":"Rey.Padberg@karina.biz","name":"Clementina DuBuque","phone":"024-648-3804","username":"Moriah.Stanton","website":"ambrose.net"},{"id":8,"company":{"name":"Abernathy Group","catchPhrase":"Implemented secondary concept","bs":"e-enable extensible e-tailers"},"email":"Sherwood@rosamond.me","name":"Nicholas Runolfsdottir V","phone":"586.493.6943 x140","username":"Maxime_Nienow","website":"jacynthe.com"},{"id":6,"company":{"name":"Considine-Lockman","catchPhrase":"Synchronised bottom-line interface","bs":"e-enable innovative applications"},"email":"Karley_Dach@jasper.info","name":"Mrs. Dennis Schulist","phone":"1-477-935-8478 x6430","username":"Leopoldo_Corkery","website":"ola.org"},{"id":4,"company":{"name":"Robel-Corkery","catchPhrase":"Multi-tiered zero tolerance productivity","bs":"transition cutting-edge web services"},"email":"Julianne.OConner@kory.org","name":"Patricia Lebsack","phone":"493-170-9623 x156","username":"Karianne","website":"kale.biz"},{"id":2,"company":{"name":"Deckow-Crist","catchPhrase":"Proactive didactic contingency","bs":"synergize scalable supply-chains"},"email":"Shanna@melissa.tv","name":"Ervin Howell","phone":"010-692-6593 x09125","username":"Antonette","website":"anastasia.net"}])
      const resultUsers = await userService.getUsers()
      expect(JSON.stringify(userService.getPairUsers(resultUsers))).toBe(strUsers);
    });
  });
});
