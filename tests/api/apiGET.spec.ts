import  {test } from "@playwright/test";

test("API Get practice", async({request})=>{
    const resp = await request.get('https://restful-booker.herokuapp.com/booking');

    console.log(await resp.json());
})