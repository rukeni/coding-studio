const person = {
  name: "양승민",
  age: 33,
  nationality: "Korean"
};

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    console.log(`My ${prop} is ${Reflect.get(obj, prop)}`);
  },
  set: (obj, prop, value) => {
    console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
    Reflect.set(obj, prop, value);
  }
});

module.exports = personProxy;