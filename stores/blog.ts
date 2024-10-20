export const useBlogStore = defineStore("blog", () => {
    const currentArticle = ref<any>("CEK")

    return {
        currentArticle
    }
})
