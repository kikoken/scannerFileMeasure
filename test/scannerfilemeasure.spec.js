const mocha = require('chai').expect
const sfm = require('..').default


describe('Scanner File Measure',()=>{

    it('Setear tamaño del documento físico', ()=> {
        const setpage = sfm.setPage(21,29);

        expect(setpage).to.equal('21 / 29')
    })

    it('Setear resolución del scanner', ()=> {
        
    })
    
    it('Setear unidad de medida', ()=> {
        
    })
})