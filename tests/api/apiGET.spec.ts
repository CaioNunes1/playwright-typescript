import  {test,request,APIRequestContext } from "@playwright/test";

let reqContext1:APIRequestContext;
test.beforeAll("Before all the tests",async()=>{
    reqContext1 = await request.newContext({
        baseURL:'https://restful-booker.herokuapp.com'
    });
})

test("API Get practice 1", async({request})=>{
    const resp = await request.get('https://restful-booker.herokuapp.com/booking',{
        headers:{
            Accept:'application/json',
        }
    });

    console.log(await resp.json());
})

test("API Get practice 2", async({})=>{
    const reqContext = await request.newContext({
        baseURL:'https://restful-booker.herokuapp.com',
        extraHTTPHeaders:{
            Accept:'application/json'
        }
    });
    const resp = await reqContext.get('/booking');

    console.log(await resp.json());
})

test("API Get practice 3", async({})=>{
    const resp = await reqContext1.get('/booking');

    console.log(await resp.json());
})

test("API Get practice 4", async({})=>{
    const resp = await reqContext1.get('/booking/2402');

    console.log(await resp.json());
})

test("API Get practice 5", async({})=>{
    const resp = await reqContext1.get('/booking?firstname=John&lastname=Smith');

    console.log(await resp.json());
})

test("API Get practice 6", async({})=>{
    const resp = await reqContext1.get('/booking',{
        params:{
            firstname:'John',
            lastname:'Smith'
        }
    });

    console.log(await resp.json());
})