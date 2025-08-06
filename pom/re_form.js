export class registration{
    constructor(page){
        this.page=page

        this.addbutton = page.locator('#addNewRecordButton')


        //fill the form 
        this.firstName = page.locator('#firstName')
        this.lastName = page.locator('#lastName')
        this.email = page.locator('#userEmail')
        this.age = page.locator('#age')
        this.salary = page.locator('#salary')
        this.department = page.locator('#department')

        //submit the form 
        this.click_sub = page.locator('#submit')  

        //search account 

        this.searchBtn = page.locator('#searchBox')
        this.searchFill = page.locator('input[placeholder="Type to search"]')



    }

    
        async addbtn(){
        await this.addbutton.click()
    }

        async fName(x){
        await this.firstName.type(x, {delay:100})
    }
        async lName(y){
        await this.lastName.fill(y)
    }

        async mail(e){
       await  this.email.fill(e)
    }
        async age_i(f){
        await this.age.fill(f)
    }
        async sal(h){
        await this.salary.fill(h)
    }
        async dep(l){
        await this.department.fill(l)
    }
    
        async subbtn(){
            await this.click_sub.click()
        }
    
    async searchClick(z){
        // await this.searchBtn.click()
        await this.searchFill.type(z)

    }

    async clearSearch() {
    await this.searchFill.fill('');
    await this.page.keyboard.press('Enter');
}
async click_edit(n){
    await this.page.locator(`#edit-record-${n}`).click()

}
async editTable(p,q,r,s,t,u){

    await this.firstName.fill(p)
    await this.lastName.fill(q)
    await this.email.fill(r)
    await this.age.fill(s)
    await this.salary.fill(t)
    await this.department.fill(u)
    await this.page.keyboard.press('Enter');
    
}


}