import { View, Text, TextInput, StyleSheet } from 'react-native'
import { Controller } from 'react-hook-form'
import Input from './Input'

const ReactFormInput = (props) => {
    const { name, control, rules, placeholder } = props
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({
                field: { value, onChange, onBlur },
                fieldState: {
                    error
                }
            }) => (
                <>
                    <Input
                        value={value}
                        onChangeText={onChange}
                        placeholder={placeholder}
                        onBlur={onBlur}
                        errorMessage={error ? error.message : null}
                    />
                </>
            )}
        />

    )

}
export default ReactFormInput