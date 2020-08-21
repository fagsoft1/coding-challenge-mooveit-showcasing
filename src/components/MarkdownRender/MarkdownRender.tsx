import React, {useEffect, useState} from "react";
import Markdown from 'markdown-to-jsx';
import {InputText, Button, InputNumber, SelectInput, Autocomplete} from 'mooveit-library-fagsoft';

interface IMarkdownRender {
    filename: string
}

const MarkdownRender = ({filename}: IMarkdownRender) => {
    const [markdownFile, setMarkdownFile] = useState();
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
                            name: "autocomplete",
                            label: "Favorite Animal"
                        }
                    },
                    InputNumber: {
                        component: InputNumber
                    },
                    Button: {
                        component: Button,
                        props: {
                            onClick: () => alert('You have clicked me!'),
                            text: "Click on Me!"
                        }
                    },
                    SelectInput: {
                        component: SelectInput,
                        props: {
                            options: [{value: 1, text: 'Select One'}, {value: 2, text: 'Select Two'}]
                        }
                    },
                },
            }}
        />}
    </div>
}

export default MarkdownRender;