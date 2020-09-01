# ⚠️ IMPORTANT NEWS! 📰

I’ve been dealing with CQRS, event-sourcing and DDD long enough now that I don’t need working with it anymore unfortunately, so at least for now this my formal farewell!

I want to thank everyone who has contributed in one way or another.
Especially...

- [Jan](https://github.com/jamuhl), who introduced me to this topic.
- [Dimitar](https://github.com/nanov), one of the last bigger contributors and maintainer.
- My last employer, who gave me the possibility to use all these CQRS modules in a big Cloud-System.
- My family and friends, who very often came up short.

Finally, I would like to thank [Golo Roden](https://github.com/goloroden), who was there very early at the beginning of my CQRS/ES/DDD journey and is now here again to take over these modules.

Golo Roden is the founder, CTO and managing director of [the native web](https://www.thenativeweb.io/), a company specializing in native web technologies. Among other things, he also teaches CQRS/ES/DDD etc. and based on his vast knowledge, he brought wolkenkit to life.
[wolkenkit](https://wolkenkit.io) is a CQRS and event-sourcing framework based on Node.js. It empowers you to build and run scalable distributed web and cloud services that process and store streams of domain events.

With this step, I can focus more on [i18next](https://www.i18next.com), [locize](https://locize.com) and [localistars](https://localistars.com). I'm happy about that. 😊

So, there is no end, but the start of a new phase for my CQRS modules. 😉

I wish you all good luck on your journey.

Who knows, maybe we'll meet again in a github issue or PR at [i18next](https://github.com/i18next/i18next) 😉


[Adriano Raiano](https://twitter.com/adrirai)

---

## Introduction

This is a sample implementation of CQRS / Eventsourcing Infrastructure in node.js using:

- [domain](https://github.com/adrai/node-cqrs-domain)
- [eventdenormalizing](https://github.com/adrai/node-cqrs-eventdenormalizer)
- [viewmodel, read/write repository](https://github.com/adrai/node-viewmodel)
- [eventstore](https://github.com/jamuhl/nodeEventStore)
- [business-rules and validation](https://github.com/adrai/rule-validator)

### get it up and running

0.  install and start [Redis](https://redis.io/)
        
1.  start server in _host_ and _domain_ folder

        node server.js
        
1.  direct your browser to 

        http://localhost:3000
        
the source code is well documented to understand the core principles.

## why should i care?

- [Clarified CQRS - Udi Dahan](http://www.udidahan.com/2009/12/09/clarified-cqrs/)
- [Top 10 Reasons to do CQRS - Rinat Abdullin](http://abdullin.com/journal/2010/10/22/top-10-reasons-to-do-cqrs-in-a-pdf.html)
- [CQRS why, what, how - Jeppe Cramon](http://www.slideshare.net/jeppec/cqrs-why-what-how)
               
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


## other examples

- [https://github.com/smariussorin/EventSourcedMicroservices](https://github.com/smariussorin/EventSourcedMicroservices)
