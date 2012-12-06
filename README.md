## Introduction

This is a sample implementation of CQRS / Eventsourcing Infrastructure in node.js using:

- [domain](https://github.com/adrai/node-cqrs-domain)
- [eventdenormalizing](https://github.com/adrai/node-cqrs-eventdenormalizer)
- [viewmodel, read/write repository](https://github.com/adrai/node-viewmodel)
- [eventstore](https://github.com/jamuhl/nodeEventStore)
- [business-rules and validation](https://github.com/adrai/rule-validator)

### get it up and running
        
1.  start server in _host_ and _domain_ folder

        node server.js
        
1.  direct your browser to 

        http://localhost:3000
        
the source code is well documented to understand the core principles.

## why should i care?

- [Clarified CQRS - Udi Dahan](http://www.udidahan.com/2009/12/09/clarified-cqrs/)
- [Top 10 Reasons to do CQRS - Rinat Abdullin](http://abdullin.com/journal/2010/10/22/top-10-reasons-to-do-cqrs-in-a-pdf.html)
               
## got the sample - where to go now?

This modules are the result of open sourcing parts of a large reallife project of a distributed system based on the principle of 
DDDD and CQRS. It's gone through a lot of iterations and should address most pitfalls.

The API is designed well so you can focus on the domain without worring to much about the infrastructure.

- [domain](https://github.com/adrai/node-cqrs-domain)
- [eventdenormalizing](https://github.com/adrai/node-cqrs-eventdenormalizer)
- [viewmodel, read/write repository](https://github.com/adrai/node-viewmodel)
- [eventstore](https://github.com/jamuhl/nodeEventStore)
- [proper dequeing](https://github.com/adrai/node-queue)
- [business-rules and validation](https://github.com/adrai/rule-validator)
- [message bus](https://github.com/adrai/rabbitmq-nodejs-client)

- [without distributing](https://github.com/adrai/node-cqs)


Documentation can be found [here](http://adrai.github.com/cqrs/)