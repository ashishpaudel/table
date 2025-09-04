import{test,expect} from '@playwright/test';
import { registration } from '../pom/re_form';
import { var_table } from '../pom/variables';
import { CLIENT_RENEG_LIMIT } from 'tls';
import { accessSync } from 'fs';


test.describe("Web Tables Page", ()=>{
    
    test.beforeEach(async({page})=>{
    await page.goto('https://demoqa.com/webtables') 
    })
// test 1:
    test("should open add new modal", async({page})=>{
        const reg =new registration(page)
        // console.log(email_[1])
        const totalName = var_table.first_Name.length;
        for(let i = 0; i<totalName; i++){
        await reg.addbtn()
        await reg.fName(var_table.first_Name[i])
        await reg.lName(var_table.last_Name[i])
        await reg.mail(var_table.email_[i])
        await reg.age_i(var_table.age_[i])
        await reg.sal(var_table.salary_[i])
        await reg.dep(var_table.department_[i])
        await reg.subbtn()
        await expect(page.locator('.rt-tbody')).toContainText(var_table.first_Name[i])
        await page.waitForTimeout(1000)
        
        }
      })
   
    
//test 2:search by name 
    test("should check the table by name ", async({page})=>{
        const reg =new registration(page)
        
        for(let i=0; i<var_table.name_given.length; i++){

        await reg.searchClick(var_table.name_given[i])

        await expect(page.locator('.rt-tbody')).toContainText(var_table.name_given[i])
        await reg.clearSearch()
        await page.waitForTimeout(1000)
        }
        
    })

    // test 3: edit 


    test.skip("should be editable", async({page})=>{

        const reg = new registration(page)
        for(let j=0; j<var_table.name_given.length; j++){
        await reg.click_edit([j+1])
        const name = var_table.first_Name[j]
        console.log(name)
        const lastname = var_table.last_Name[j]
        const email = var_table.email_[j]
        const age = var_table.age_[j]
        const salary = var_table.salary_[j]
        const dep = var_table.department_[j] 
        await reg.editTable(name,lastname,email,age,salary,dep)
        await expect(page.locator('.rt-tbody')).toContainText(var_table.first_Name[j])
        await page.waitForTimeout(1000)
        }
        
    })

 })