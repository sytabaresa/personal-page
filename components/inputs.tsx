import tw from 'twin.macro'
import { styled } from '../stitches.config';

export const Input = styled('input', {
    ...tw`input input-primary input-ghost border-0 border-b-2`,
    variants: {
        variant: {
            light: tw`border-base-100`
        }
    }
})



export const Textarea = styled('textarea', {
    ...tw`textarea textarea-primary textarea-ghost border-2`,
    variants: {
        variant: {
            light: tw`border-base-100`
        }
    }
})
