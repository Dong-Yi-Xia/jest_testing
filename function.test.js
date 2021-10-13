const functions = require('./function')

//Run before Each and after Each test
// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

//Run before All and after All test
// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log('Database Initilized ..... ');
// const closeDatabase = () => console.log('Database Closed ..... ');
const nameCheck = () => console.log('Checking Name ...')

//Target a specific Tests with the describe block
describe('Checking Names', () => {
  beforeEach(() => nameCheck());

  test('User is Jeff', () => {
    const user = 'Jeff';
    expect(user).toBe('Jeff')
  })

  test('User is Mike', () => {
    const user = 'Mike';
    expect(user).toBe('Mike')
  })
});




test('Adds 2 + 2 to equal 4', ()=> {
  expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', ()=> {
  expect(functions.add(2, 2)).not.toBe(5);
});

test('Should be null', ()=> {
  expect(functions.isNull()).toBeNull();
});

test('Should be falsy', ()=> {
  expect(functions.checkValue(null)).toBeFalsy();
});

test('Should be truthy', ()=> {
  expect(functions.checkValue(2)).toBeTruthy();
});

test('User should be John Doe object', ()=> {
  expect(functions.createUser()).toEqual({firstName: 'John', lastNmae: 'Doe'});
});

test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
})

test('Should be under or equal 1600', () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
})

//Regex
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/i)
  // having the i flag - which is case-insensitive
})

//Array
test('Admin should be in usernames', () => {
  usernames = ['john', 'sammy', 'admin'];
  expect(usernames).toContain('admin');
})

//Async Data

//Promise
// test('User fetched name should be Leanne Graham', () => {
//   expect.assertions(1);
//   return functions.fetchUser()
//     .then(data => {
//       expect(data.name).toEqual('Leanne Graham')
//     })
// })

//Async
test('User fetched name should be Leanne Graham', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
})
