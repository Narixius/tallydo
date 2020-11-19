import React from 'react'
import { PlusOutline, CheckOutline, TrashOutline } from 'heroicons-react'
import { TwitterPicker } from 'react-color'
import { RootState } from '../../store'
import { AddTag, RemoveTag } from '../../store/tag/actions'
import { Tag, TagArray } from '../../store/tag'
import { connect } from 'react-redux'
import './Tags.css'

type Props = {
    onTagAdd(tag: Tag): void
    onTagRemove(tag: Tag): void
    AddTag: typeof AddTag
    RemoveTag: typeof RemoveTag
    tags: TagArray
}
const mapStateToProps = ({ tags }: RootState) => {
    return { tags }
}
const mapDispatchToProps = { AddTag, RemoveTag }

function Tags({ onTagAdd, onTagRemove, tags, AddTag, RemoveTag }: Props) {
    const [selectedTag, setSelectedTag] = React.useState<string[]>([])
    const [showAddInput, setShowAddInput] = React.useState<boolean>(false)
    const [customColor, setCustomColor] = React.useState<string>('#8ED1FC')
    const [tagTitle, setTagTitle] = React.useState('')

    function generateClassName(tagName: string) {
        let defaultClass =
            'tag rounded-md mb-2 flex self-start text-sm items-center text-black-blue font-bold px-3 py-1 mr-3 opacity-25 cursor-pointer'
        if (selectedTag.includes(tagName)) return defaultClass + ' active'
        else return defaultClass
    }
    function selectTag(tag: Tag): void {
        if (tag.title.length > 0) {
            let tags = [...selectedTag]
            if (tags.includes(tag.title)) {
                tags = tags.filter((tagName) => tagName !== tag.title)
                onTagRemove(tag)
            } else {
                tags.push(tag.title)
                onTagAdd(tag)
            }
            setSelectedTag(tags)
        }
    }
    const submitTodo = () => {
        if (tagTitle.length > 0) {
            let tag = new Tag(tagTitle, customColor, false)
            AddTag(tag)
            selectTag(tag)
        }
        setTagTitle('')
        setShowAddInput(false)
    }
    return (
        <div>
            <span className="text-white block p-2 pl-0 font-bold text-sm">
                Tags
            </span>
            <div className="flex md:flex-wrap overflow-x-auto overflow-y-hidden hiddenScrollbar">
                {tags.map((tag, index) => {
                    return (
                        <div
                            key={tag.title + index}
                            className={generateClassName(tag.title)}
                            style={{
                                backgroundColor: tag.color,
                            }}
                            onClick={() => {
                                selectTag(tag)
                            }}
                        >
                            <span>{tag.title}</span>
                            {!tag.defaultTodo && (
                                <div
                                    className="removeTodoAction cursor-pointer"
                                    onClick={() => {
                                        onTagRemove(tag)
                                        RemoveTag(tag)
                                    }}
                                >
                                    <TrashOutline size={18} />
                                </div>
                            )}
                        </div>
                    )
                })}
                {showAddInput && (
                    <div>
                        <div
                            className={
                                generateClassName('customDate') +
                                ' bg-white flex active '
                            }
                            onClick={() => {}}
                        >
                            <div
                                className="colorpicker w-6 h-6 rounded-md"
                                style={{ backgroundColor: customColor }}
                            ></div>
                            <input
                                className="mx-2 text-sm bg-transparent font-bold color-black-blue focus:outline-none"
                                type="text"
                                placeholder="write tag title"
                                onChange={(e) => {
                                    setTagTitle(e.currentTarget.value)
                                }}
                                onKeyUp={(e) => {
                                    if (e.key === 'Enter') {
                                        submitTodo()
                                    }
                                }}
                            />
                            <div
                                className="colorpicker w-6 h-6 rounded-md border border-gray-500 color-gray-500"
                                onClick={submitTodo}
                            >
                                <CheckOutline
                                    className="stroke-current text-gray-700"
                                    size={22}
                                />
                            </div>
                        </div>
                        <TwitterPicker
                            color={customColor}
                            onChangeComplete={(color) => {
                                setCustomColor(color.hex)
                            }}
                        />
                    </div>
                )}
                <div
                    className={
                        'dateTag rounded-md mb-2 self-start text-sm text-gray-300 font-bold px-2 py-1 mr-2 opacity-50 cursor-pointer bg-gray-400 bg-opacity-25 flex'
                    }
                    onClick={() => {
                        setShowAddInput(true)
                    }}
                >
                    <PlusOutline size={19} />
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Tags)
