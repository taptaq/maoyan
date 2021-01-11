const state={
    // 初始值 
    nm:window.localStorage.getItem('nowcity') || '北京',
    id:window.localStorage.getItem('nowcityid') || 1,
};

const actions={

};

const mutations={
    CITY_INFO(state,payload){
        state.nm=payload.nm;
        state.id=payload.id;
    }
};

export default {
    namespaced:true,
    state,
    actions,
    mutations
}