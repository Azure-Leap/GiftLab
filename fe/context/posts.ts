import {create} from 'zustand'
import {persist} from 'zustand/middleware'
import { posts } from '@/data/home/posts'
import {categoryListInfo} from '@/data/home/category'


type CategoryListInfo = {
    title : string,
    label : string,
    checked : boolean
}

type Post = {
    category : string
    title : string
    image : string
    id : string,
    description : string
    carouselImg : string
    type : string
    checked : boolean
}

type PostState = {
    selectedCategoryList : string[]
    selectedTypeList : string[]
    filteredPosts : Post[]
    allPost : Post[]
    categoryListInfoState : CategoryListInfo[]
    isPageWithDescription : boolean
    clickedPost : any
    // hideFilterInputs : boolean
    // setHideFilterInputs : (boolean : any) => void
    setCategoryListInfoState : (categoryListIsChecked : boolean, index : number) => void
    setAllPost : (AllPosts : Post[]) => void
    setFilteredPosts : ( postList : Post[]) => void
    setSelectedCategoryList: (postList : string) => void
    setSelectedTypeList : (filteredPost : string) => void
    setPageWithDescription : (boolean : boolean) => void
    setClickedPost : (post : any) => void

}

export const usePosts = create<PostState>()(

    persist(
        (set)=>({

            allPost : posts,
            setAllPost : (allPost) => set(state => ({allPost})),

            // Category list deer categoryItem iig checklsnii daraa refresh hiihed buh checkuud ustaad bsn bolohoor ted nariin state iig hadgalahaar bolov
            // list info n bolohooroo category dotorh hed baigaag zaana
            categoryListInfoState : categoryListInfo,
            setCategoryListInfoState : (categoryListIsChecked, i ) => set(state => {
                const updatedCatInfo = state.categoryListInfoState.map((singleCategoryInfo, k) => k === i ? {...singleCategoryInfo, checked : !categoryListIsChecked} : singleCategoryInfo)
                return {categoryListInfoState : updatedCatInfo}
            }),

            // Type (deerhte adilhan)
            // categoryListInfoState : 

            // selectedCategoryList array ruu checkbox deer darah uyd tuhain utgiig oruulna. ingej ugsnuur the list deh utguudiig filterdej haruulna gesen ug
            selectedCategoryList : [],
            setSelectedCategoryList : ( label ) => set(state => {
        
                    const isExistingLabel = state.selectedCategoryList.includes(label);
                    if(isExistingLabel) {
                        const updatedSelectedCategoryList = state.selectedCategoryList.filter( categoryLabel => categoryLabel != label);
                        return {selectedCategoryList : updatedSelectedCategoryList}
                    } else {
                        return {selectedCategoryList : [...state.selectedCategoryList, label]}
                    }
                
            }),

            // deerh category to adilhan uureg guitsetgene
            selectedTypeList : [],
            setSelectedTypeList : ( label ) => set(state => {
                
                const isExistingLabel = state.selectedTypeList.includes(label);
                if(isExistingLabel) {
                    const updatedSelectedTypeList = state.selectedCategoryList.filter( typeLabel => typeLabel != label);
                    return {selectedTypeList : updatedSelectedTypeList}
                } else {
                    return {selectedTypeList : [...state.selectedTypeList, label]}
                }
            }),

            // Deerh 4n List array dahi bga element eer Niit postuuudiig filterdeh
            filteredPosts : [],
            setFilteredPosts : ( allPostsList ) => set(state => {
                if (!state.selectedCategoryList.length && !state.selectedTypeList.length ) {
                    return {filteredPosts : allPostsList}
                } else {
                    let dirtyPosts = allPostsList.filter( post => state.selectedCategoryList.includes( post.category));
                    if(state.selectedTypeList.length){ dirtyPosts = dirtyPosts.filter( post => state.selectedTypeList.includes(post.type))}
                    return {filteredPosts : dirtyPosts}
                }
            }),

            // Post uudiig haruulah 2page baigaa buguud 1n description pageteigee tsug garch ireh ym hervee tsug garch irdeg bol true
            isPageWithDescription : true,
            setPageWithDescription : (boolean) => set(state => ({isPageWithDescription : !state.isPageWithDescription})),

            // Post clicked hiigdsenuu ?
            clickedPost : posts[0],
            setClickedPost : (post) => set(state=>({clickedPost : post})),

            // Hide searchInput??
            // hideFilterInputs : true,
            // setHideFilterInputs : (boolean) => set(state=>({hideFilterInputs : !state.hideFilterInputs}))
        }),

        {name : 'filtered-posts'}
    )
)