import { types } from "mobx-state-tree"

// Define a couple models
const Author = types.model({
    id: types.identifier,
    firstName: types.string,
    lastName: types.string
})
const Tweet = types.model({
    id: types.identifier,
    author: types.reference(Author), // stores just the `id` reference!
    body: types.string,
    timestamp: types.number
})

// Define a store just like a model
const RootStore = types.model({
    authors: types.array(Author),
    tweets: types.array(Tweet)
})

// Instantiate a couple model instances
const jamon = Author.create({
    id: "jamon",
    firstName: "Jamon",
    lastName: "Holmgren"
})

const tweet = Tweet.create({
    id: "1",
    author: jamon.id, // just the ID needed here
    body: "Hello world!",
    timestamp: Date.now()
})

// Now instantiate the store!
const rootStore = RootStore.create({
    authors: [jamon],
    tweets: [tweet]
})

// Ready to use in a React component, if that's your target.
import { observer } from "mobx-react-lite"
const MyComponent = observer((props) => {
    return <div>Hello, {rootStore.authors[0].firstName}!</div>
})

// Note: since this component is "observed", any changes to rootStore.authors[0].firstName
// will result in a re-render! If you're not using React, you can also "listen" to changes
// using `onSnapshot`: https://mobx-state-tree.js.org/concepts/snapshots