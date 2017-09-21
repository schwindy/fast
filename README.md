# fast

Should...

Expect a config file as the following
```
{
  start: 'npm start',
  dir: 'build',
  dest: 'some-address-here'
}
```

should then bundle the dir from config into a tar.gz

should send it to the destination (which should also be running fast daemon)