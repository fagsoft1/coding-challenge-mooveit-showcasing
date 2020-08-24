import React, {useEffect, useState} from "react";
import Markdown from 'markdown-to-jsx';
import {InputText, Button, InputNumber, SelectInput, Autocomplete, ThemeContextProvider} from 'mooveit-library-fagsoft';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addVisitedLink} from "../Menu/menuSlice";

interface IComponentRelated {
    to: string,
    name: string
}

interface IMarkdownRender {
    filename: string,
    componentParents?: IComponentRelated[],
    componentChildren?: IComponentRelated[],
}

const MarkdownRender = ({filename, componentParents = [], componentChildren = []}: IMarkdownRender) => {
    const [markdownFile, setMarkdownFile] = useState();
    const dispatch = useDispatch();
    useEffect(() => {
        const getFile = async () => {
            // @ts-ignore
            const markdown = await import(`../../docs/${filename}`);
            setMarkdownFile(markdown.default);
        }
        getFile();
        return () => setMarkdownFile(null);
    }, [filename])
    return <div>
        {markdownFile && <Markdown
            className='markdown-body'
            children={markdownFile}
            options={{
                overrides: {
                    InputText: {
                        component: InputText
                    },
                    Autocomplete: {
                        component: Autocomplete,
                        props: {
                            options: ['Pig', 'Dog', 'Cat', 'Parrot', 'Pinguin', 'Bear', 'Lion', 'Lizard', 'Ant'],
                        }
                    },
                    InputNumber: {
                        component: InputNumber
                    },
                    Button: {
                        component: Button,
                        props: {
                            onClick: () => alert('You have clicked me!')
                        }
                    },
                    SelectInput: {
                        component: SelectInput,
                        props: {
                            options: [{value: 1, text: 'Select One'}, {value: 2, text: 'Select Two'}]
                        }
                    },
                    ThemeContextProvider: {
                        component: ThemeContextProvider,
                        props: {
                            theme: {
                                palette: {
                                    primary: {main: 'green', contrast: 'white'},
                                    secondary: {main: 'blue', contrast: 'white'},
                                },
                            }
                        }
                    },
                },
            }}
        />}
        {componentParents.length > 0 && <>
            <h4 className='mt-4'>INHERITANCE</h4>
            {componentParents.map(parent => <div>
                <Link
                    to={parent.to}
                    onClick={() => dispatch(addVisitedLink(parent.name))}
                >
                    {parent.name}
                </Link>
            </div>)}
        </>}
        {componentChildren.length > 0 && <>
            <h4 className='mt-4'>USED BY</h4>
            {componentChildren.map(children => <div>
                <Link
                    to={children.to}
                    onClick={() => dispatch(addVisitedLink(children.name))}
                >
                    {children.name}
                </Link>
            </div>)}
        </>}
    </div>
}

export default MarkdownRender;