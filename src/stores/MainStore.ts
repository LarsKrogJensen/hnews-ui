import {action, observable} from "mobx"
import DataApi, {StoryType} from "../api/DataApi"
import {Story} from "../api/typings"
import {autobind} from "core-decorators"
export default class MainStore {

    public topStories: SectionStore

    private readonly api: DataApi

    constructor(api: DataApi) {
        this.api = api
        this.topStories = new SectionStore(api)
    }
}


export class SectionStore {
    @observable
    public stories: Story[] = []

    @observable
    public loading: boolean = false

    constructor(api: DataApi) {
        this.load(api)
    }

    public load(api: DataApi) {
        api.stories(StoryType.TopStories)
            .then(result => this.handleResponse(result))
    }

    @action
    private handleResponse(result: Story[]) {
        this.stories = result
    }
}

