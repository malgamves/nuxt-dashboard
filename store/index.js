export const state = () => ({})

export const getters = {

}

export const mutations = {

}

export const actions = {
    async getAffirm() {
        let res = await this.$axios.get('/')
        return res;
      }

}