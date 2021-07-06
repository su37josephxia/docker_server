const Sentry = require('@sentry/node');
Sentry.init({ dsn: 'http://9163ae2120f945eea448529460cb6586@localhost:9000/2' });

try {
    abc()
} catch (e) {
    console.log(e)
    Sentry.captureException(e, {
        contexts: {
          message: {
            a: 1,
            b: { b: 1 },
          },
        },
      });
}


    Sentry.captureException(e, {
        contexts: {
          message: {
            a: 1,
            b: { b: 1 },
          },
        },
      });
