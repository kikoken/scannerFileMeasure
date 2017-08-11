const expect = require('chai').expect
const sfm = require('..').default


describe('Scanner File Measure',()=>{
    
    it('Setear tamaño del documento físico', ()=> {
        const setpage = sfm().setPage(21,29);
        
        expect(setpage).to.equal('21 / 29')
    })
    
    it('Setear resolución del scanner', ()=> {
        const setresolution = sfm().setResolution(600,600)
        
        expect(setresolution).to.equal('600 / 600')
    })
    
    it('Setear unidad de medida', ()=> {
        const setunit = sfm().setUnit('cm')
        
        expect(setunit).to.equal('cm')
    })

    it('Obtener tamaño del archivo', ()=> {
        expect(()=>{
            sfm().getDimension()
        }).to.throw('Configurar página, resolución y unidad de medida')
    })
})