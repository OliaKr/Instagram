import { SET_STORIES, UPDATE_STORY, REMOVE_STORY, ADD_STORY } from "./story.reducer"
import { store } from "../store/store.js";
import { storyService } from "../assets/services.js/story-service";




// Action Creators:
export function getActionRemovestory(storyId) {
    return {
        type: REMOVE_STORY,
        storyId
    }
}

export function getActionAddstory(story) {
    return {
        type: ADD_STORY,
        story
    }
}

export function getActionUpdatestory(story) {
    return {
        type: UPDATE_STORY,
        story
    }
}

export async function loadStories() {
    try {
        const stories = await storyService.query()
        console.log('Stories from DB:', stories)
        store.dispatch({
            type: SET_STORIES,
            stories
        })

    } catch (err) {
        console.log('Cannot load srories', err)
        throw err
    }

}

export async function removestory(storyId) {
    try {
        await storyService.remove(storyId)
        store.dispatch(getActionRemovestory(storyId))
    } catch (err) {
        console.log('Cannot remove story', err)
        throw err
    }
}

export async function addstory(story) {
    try {
        const savedstory = await storyService.save(story)
        console.log('Added story', savedstory)
        store.dispatch(getActionAddstory(savedstory))
        return savedstory
    } catch (err) {
        console.log('Cannot add story', err)
        throw err
    }
}

export function updatestory(story) {
    return storyService.save(story)
        .then(savedstory => {
            console.log('Updated story:', savedstory)
            store.dispatch(getActionUpdatestory(savedstory))
            return savedstory
        })
        .catch(err => {
            console.log('Cannot save story', err)
            throw err
        })
}

