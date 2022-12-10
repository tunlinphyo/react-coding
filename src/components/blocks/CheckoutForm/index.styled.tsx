import styled, { css } from "styled-components"

import {
    resetButton,
    resetInput,
    normalTransitions,
} from "@styles/presets.styled"

export const Container = styled.section``

export const Form = styled.form`
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 35px;
`

export const FieldGroups = styled.article`
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 20px;
`

type FieldsMergeProps = {
    column?: number
}
export const FieldsMerge = styled.section`
    display: grid;
    ${({ column = 2 }: FieldsMergeProps) => css`
        grid-template-columns: repeat(${column}, 1fr);
    `}

    .fields:not(:last-child) input {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    .fields:not(:first-child) input {
        border-left-width: 0;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`

export const FieldControl = styled.label`
    display: block;
`

type FieldLabelProps = {
    error?: boolean
}
export const FieldLabel = styled.span`
    display: block;
    margin-bottom: 12px;
    color: var(--label);
    font-size: 0.875em;
    font-weight: 700;

    ${({ error = false }: FieldLabelProps) => {
        return (
            error &&
            css`
                color: var(--error);
            `
        )
    }}
`

export const Input = styled.input`
    ${normalTransitions()}
    ${resetInput()}

    color: var(--input_value);
    font-size: 0.875em;
    padding: 9px 12px;

    width: 100%;

    background-color: #fff;

    border: 1px solid var(--input_border);
    border-radius: 8px;

    &::placeholder {
        opacity: 0.5;
    }
`

export const ErrorMessage = styled.div`
    color: var(--error);
    font-weight: 500;
    font-size: 0.6875em;
    margin-top: 5px;
`

export const Actions = styled.article`
    display: flex;
    justify-content: center;
`

export const RelativeContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const CardContainer = styled.div`
    position: absolute;
    z-index: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0 8px;
    padding: 0 12px;
`

type CardProps = {
    isType?: boolean,
    card?: string,
}
export const Card = styled.div`
    width: 32px;
    height: 18px;
    border-radius: 2px;

    ${({ isType = false, card = "" }: CardProps) => {
        switch (card) {
            case "mastercard":
                return css`background-color: red; opacity: ${ isType ? "1" : ".3"};`
            case "visa":
                return css`background-color: blue; opacity: ${ isType ? "1" : ".3"};`
            default:
                return css`background-color: #000; opacity: ${ isType ? "1" : ".3"};`
        }
    }}
`

export const BtnSubmit = styled.button`
    ${normalTransitions()}
    ${resetButton()}

    min-width: 150px;
    height: 35px;
    border-radius: 6px;
    background-color: var(--dorminant_1);
    padding: 0 12px;
    color: #fff;
`


export const Fields = styled.article.attrs(() => ({ className: "fields" }))``
