# README

## Workflow

1. get token: /get-token

   - request

     ```txt
     PATH: /get-token
     METHOD: GET
     HEADERS: "Content-Type": "application/json"
     ```

   - response

     ```txt
     STATUS CODE: 200
     HEADERS: "Content-Type": "application/json"
     BODY:  {
            "message": "Hello",
            "token": 1669186868377
            }
     ```

2. confirm process: /multiple-return-format (first time)

   - request

     ```txt
     PATH: /multiple-return-format
     METHOD: POST
     HEADERS: "Content-Type": "application/json"
     BODY: {"token": 1669186868377}
     ```

   - response

     ```txt
     STATUS CODE: 200
     HEADERS: "Content-Type": "application/json"
     BODY:  {
            "message": "Hello World",
            "status": "confirmed",
            "token": 1669186868377
            }
     ```

3. list token: /list-tokens

   - request

     ```txt
     PATH: /list-tokens
     METHOD: GET
     HEADERS: "Content-Type": "application/json"
     ```

   - response

     ```txt
     STATUS CODE: 200
     HEADERS: "Content-Type": "application/json"
     BODY:  {
            "1669186868377": 1,
            "1669186869126": 0,
            "1669186869946": 0
            }
     ```

4. approve process: /multiple-return-format (second time)

   - request

     ```txt
     PATH: /multiple-return-format
     METHOD: POST
     HEADERS: "Content-Type": "application/json"
     BODY: {"token": 1669186868377}
     ```

   - response

     ```txt
     STATUS CODE: 200
     HEADERS: "Content-Type": "application/json"
     BODY:  {
            "message": { prefix: "Hello World" }, 
            "status": "approved",
            "token": 1669186868377
            }
     ```

5. list token: /list-tokens

   - request

     ```txt
     PATH: /list-tokens
     METHOD: GET
     HEADERS: "Content-Type": "application/json"
     ```

   - response

     ```txt
     STATUS CODE: 200
     HEADERS: "Content-Type": "application/json"
     BODY:  {
            "1669186869126": 0,
            "1669186869946": 0
            }
     ```

## Start Mountebank

```sh
mb start --configfile multiple-returns.json --allowInjection
```
