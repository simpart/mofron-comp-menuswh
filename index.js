/**
 * @file   mofron-comp-menuconts/index.js
 * @brief  menu contents swich
 * @author simpart
 */
const mf = require('mofron');
mf.comp.MenuSwh = class extends mf.Component {
    
    /**
     * initialize component
     * 
     * @param po paramter or option
     */
    constructor (po) {
        try {
            super();
            this.name('MenuSwh');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * menu component setter/getter
     *
     * @param p1 (Menu) menu component
     * @param p1 (undefined) call as getter
     * @return (Menu) menu component
     */
    menu (prm) {
        try {
            if (undefined !== prm) {
                if (true !== mf.func.isInclude(prm, ['Component', 'Menu'])) {
                    throw new Error('invalid parameter');
                }
                prm.selectEvent(this.switchConts);
            }
            return this.innerComp('menu', prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * contents component setter/getter
     *
     * @param p1 (Component) add contents
     * @param p1 (array) add contents array
     * @param p1 (undefined) call as getter
     * @return (Component) contents
     */
    contents (prm) {
        try { return this.arrayMember('contents', 'Component', prm); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * switch contents
     * 
     * @param p1 (Menu) menu component object
     * @param p2 (number) selected menu index
     * @note private method
     * @note it is called by select event of menu component
     */
    switchConts (mnu, idx) {
        try {
            let conts = this.contents();
            for (let cidx in conts) {
                conts[cidx].visible((idx == cidx) ? true : false);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.comp.MenuSwh;
/* end of file */
