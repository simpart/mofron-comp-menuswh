/**
 * @file   mofron-comp-{@comp-name}/index.js
 * @author simpart
 */
let mf = require('mofron');
/**
 * @class mofron.comp.MenuSwitch
 * @brief contents menu component for mofron
 */
mf.comp.MenuSwitch = class extends mf.Component {
    
    constructor (po, idx) {
        try {
            super();
            this.name('MenuSwitch');
            this.prmOpt(po, idx);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @param prm : (Date object) display date
     */
    initDomConts (prm, idx) {
        try {
            if (undefined !== prm) {
                if (undefined !== idx) {
                    prm.selectIdx(idx);
                }
                this.menu(prm);
                this.switchConts(prm, this);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    menu (val) {
        try {
            if (undefined === val) {
                /* getter */
                return (undefined === this.m_menu) ? null : this.m_menu;
            }
            /* setter */
            if (true !== mf.func.isInclude(val, 'Menu')) {
                throw new Error('invalid parameter');
            }
            val.selectEvt(this.switchConts, this);
            /* set select index */
            if (null === val.selectIdx()) {
                val.selectIdx(0);
            }
            /* display initial contents */
            this.switchConts(val, this);
            this.m_menu = val;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    addChild (chd, idx) {}
    
    contents (cnt) {
        try {
            if (undefined === cnt) {
                /* getter */
                return (undefined === this.m_mnu_conts) ? null : this.m_mnu_conts;
            }
            /* setter */
            if (('object' === typeof cnt) && ('undefined' !== typeof cnt[0])) {
                for (let cidx in cnt) {
                    this.contents(cnt[cidx]);
                }
            } else {
                if (true !== mf.func.isInclude(cnt, 'Component')) {
                    throw new Error('invalid parameter');
                }
                if (undefined === this.m_mnu_conts) {
                    this.m_mnu_conts = new Array();
                }
                this.m_mnu_conts.push(cnt);
            }
            this.switchConts(this.menu(), this);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    switchConts (mnu, prm) {
        try {
            if (null === mnu) {
                return;
            }
            let conts  = prm.contents();
            let selidx = mnu.selectIdx();
            if ( (null === conts)     ||
                 (0 === conts.length) ||
                 (conts.length <= selidx) ) {
                return;
            }
            for (let cidx in conts) {
                conts[cidx].visible((selidx == cidx) ? true : false);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    themeConts () {
        try {
            
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
}
module.exports = mofron.comp.MenuSwitch;
/* end of file */
