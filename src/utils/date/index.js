export const getChatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${hours}:${minutes} ${hours >= 12 ? 'PM' : 'AM'}`
}

export const setDateChat = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const oldDate = date.getDate();

    return `${year}-${month}-${oldDate}`;
}
