import {action, observable} from "mobx"
import DataApi, {TopStoryQuery} from "../api/DataApi"
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
        this.loading = true
        api.stories(TopStoryQuery)
            .then(result => this.handleResponse(result))
            .then( () => this.setLoading(false))
    }

    @action
    private handleResponse(result: Story[]) {
        this.stories = result
    }

    @action
    private setLoading(loading: boolean) {
        this.loading = loading
    }
}

