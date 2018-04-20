import test from 'ava'
import txtTemplate from './'

test('txt-template example', t => {
  t.plan(1)
  return txtTemplate({
    template: 'example.txt',
    output: 'output.txt',
    data: {
      name: 'John Doe',
      age: 26,
      email: 'johndoe@example.com',
      birthdate: '01/01/1990',
      projects: ['project1', 'project2', 'project3']
    }
  }).then((res) => {
    t.pass()
  }).catch((err) => {
    t.fail()
  })
})

test('txt-template fail example', t => {
  t.plan(1)
  return txtTemplate({
    template: 'exampleFail.txt',
    output: 'output.txt',
    data: {
      name: 'John Doe',
      age: 26,
      email: 'johndoe@example.com',
      birthdate: '01/01/1990',
      projects: ['project1', 'project2', 'project3']
    }
  }).then((res) => {
    t.fail()
  }).catch((err) => {
    t.pass()
  })
})
