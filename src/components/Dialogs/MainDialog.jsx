import React from 'react'
import s from "./MainDialog.module.css"
import * as Yup from "yup"
import {Formik, Form, Field, ErrorMessage} from 'formik'
import { Speaker } from './Makers/Makers'
import { Conversation } from './Makers/Makers'

export const MainDialog = (props) => {
   let NavId = props.match.params.id
    let OnSubmit =(messagea) => {
        props.AddText(NavId, messagea)}
    let Speakers = props.speakers.map((s, index) => <Speaker photo={s.photo} key = {index} SetId = {props.SetId}  stateId = {props.id}  name={s.name} id={s.id} />)
    let Message = props.messages[props.match.params.id-1].messages.map((m, index) => <Conversation AddText = {props.AddText} key={index} message={m.message}  messagea={m.messagea} id={index} />)
    return (<div className={s.wrapper}>
        
        <div className={s.Direct}>{Speakers}</div>
        <div className={s.Message} >{Message} </div>
        <div className={s.Input}> <TypeAMessageForm OnSubmit ={ OnSubmit}/></div>
        
        </div>
    )
}








const initialValues = {
    message: ''
}

    const validationSchema = Yup.object({
        message: Yup.string().required('Required')

    })

const TypeAMessageForm = ({OnSubmit}) => {

    const onSubmit = (values, {resetForm})=>{
        OnSubmit(values.message)
        resetForm({values: ""})
        
    }

    return <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form className={s.form}>
            <Field  className={s.inp} name="message" component="input"  placeholder="Type a message..." type="text"/>
                <ErrorMessage name ="message"/>
            <button className={s.btn} type="submit">Send</button>
        </Form>
    </Formik>}