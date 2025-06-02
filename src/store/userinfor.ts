import { id } from 'element-plus/es/locales.mjs';
import { defineStore } from 'pinia';
import { getUserInfor } from '../api/userinfor';


export const userInforStore = defineStore('userInfor', {
    state: () => {
        return {
            imageUrl: '',
            name: '',
            sex: '',
            department: '',
            identity: ''
        }
    },
    actions: {
        async userInfor (id: number) {
            const res = await getUserInfor(id);
            console.log(res.data);
        }

    },
    persist:true

})