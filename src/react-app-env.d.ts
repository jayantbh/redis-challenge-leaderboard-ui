/// <reference types="react-scripts" />
interface Array<T> {
	flatMap: (items: (item: Array<Array<T>>) => Array<T>) => Array<T>
}
