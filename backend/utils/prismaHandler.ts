

export const handleCreateMissingError = (message: string) => {
    let messages = message.split("\n");
    return messages[messages.length - 1]
}