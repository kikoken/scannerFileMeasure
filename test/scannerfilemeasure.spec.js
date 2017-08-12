const expect = require('chai').expect
const sfm = require('..').default


describe('Scanner File Measure',()=>{
    
    describe('Documento físico',() => {
        it('Setear tamaño del documento físico', ()=> {
            const setpage = sfm().setPage(21,29)
            
            expect(setpage).to.equal('21 / 29')
        })

        it('Error de dimensiones', ()=> {

            expect(()=>{
                sfm().setPage(0.5,'100');
            }).to.throw('Error en las dimensiones')
        })
    })
    
    describe('Resolución scanner',() => {

        it('Setear resolución', ()=> {
            const setresolution = sfm().setResolution(600,600)
            
            expect(setresolution).to.equal('600 / 600')
        })

        it('Error en resolución', ()=> {
            expect(()=>{
                sfm().setResolution('600',600)
            }).to.throw('Error en las resoluciones')
        })    
    })

    describe('Unidad de medida', () =>{

        it('Setear unidad de medida', ()=> {
            const setunit = sfm().setUnit('cm')
            
            expect(setunit).to.equal('cm')
        })
    
        it('Error setear unidad de medida', ()=> {
            expect(()=>{
                sfm().setUnit('mm')
            }).to.throw('Error unidad de medida, sólo  cm y in')
        })
    })
    
    describe('Tamaño del archivo en MB', () =>{
        it('Tamaño del archivo', ()=> {
            let _sfm = sfm()
            _sfm.setPage(21,29)
            _sfm.setResolution(600,600)
            
            expect(_sfm.getDimension()).to.equal(32.41)
        })

        it('Error al obtener tamaño del archivo', ()=> {
            expect(()=>{
                sfm().getDimension()
            }).to.throw('Configurar página, resolución y unidad de medida')
        })
    })
})