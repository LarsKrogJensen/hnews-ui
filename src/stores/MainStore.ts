import DataApi, {TopStoryQuery} from "../api/DataApi"
import {Story} from "../api/typings"


export default class MainStore {
    public topStories: SectionStore

    public stories: Map<string, Story> = new Map()
    private readonly api: DataApi

    constructor(api: DataApi) {
        this.api = api
        this.topStories = new SectionStore(api)
    }


    public story(id: string) {
        this.api.story(id).then(result => this.handleStoryResponse(result))
    }

    private handleStoryResponse(story: Story) {
        this.stories.set(story.id, story)
    }
}


export class SectionStore {
    public stories: Story[] = []

    public loading: boolean = false

    constructor(api: DataApi) {
        this.load(api)
    }

    public load(api: DataApi) {
        this.loading = true
        api.stories(TopStoryQuery)
            .then(result => this.handleResponse(result))
            .then(() => this.setLoading(false))
    }

    private handleResponse(result: Story[]) {
        this.stories = result
    }

    private setLoading(loading: boolean) {
        this.loading = loading
    }
}

