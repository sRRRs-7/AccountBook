import axios from 'axios'

const url = "http://127.0.0.1:8080"

export type postData = {
    Payer:   string,
    Month:   number,
	Food:    string,
	Method:  string,
	Expense: number,
}

export async function fetchPost(value: postData) {
    return new Promise ((resolve, reject) => {
        axios({
            method: 'POST',
            url: `${url}/create`,
            headers: {
                "Content-Type": "application/json",
            },
            responseType : 'json',
            data: {
                Payer: value.Payer,
                Month: Number(value.Month),
                Food:value.Food,
                Method: value.Method,
                Expense: Number(value.Expense),
            }
        }).then(res => {
            resolve(res);
            return res.data
        }).catch(error => {
            reject(error);
            console.log(error)
        })
    })
}

export type getData = {
    ID: number
}

export function fetchGet(id: number) {
    return new Promise((resolve, reject) => {
        axios({
            method : 'GET',
            url    : `${url}/get/${id}`,
            headers: {
                "Content-Type": "application/json",
            },
            responseType: 'json',
        }).then(res => {
            resolve(res)
        }).catch(error => {
            reject(error)
        })
    })
}

export function fetchGetMonth(month: number) {
    return new Promise((resolve, reject) => {
        axios({
            method : 'GET',
            url    : `${url}/month/${month}`,
            headers: {
                "Content-Type": "application/json",
            },
            responseType: 'json',
        }).then(res => {
            resolve(res)
        }).catch(error => {
            reject(error)
        })
    })
}

export function fetchAllGet() {
    return new Promise((resolve, reject) => {
        axios({
            method : 'GET',
            url    : `${url}/all_get`,
            headers: {
                "Content-Type": "application/json",
            },
            responseType : 'json',
        }).then(res => {
            resolve(res)
            return res.data
        }).catch(error => {
            reject(error)
        })
    })
}

export type listData = {
    Limit: number,
	Offset: number,
}

export async function fetchList(limit: number, offset: number) {
    await axios({
        method : 'GET',
        url    : `${url}/list`,
        headers: {
            "Content-Type": "application/json",
        },
        responseType : 'json',
        data   : {
            Limit: limit,
            Offset: offset,
        }
    }).then(res => {
        console.log(res.status)
        return res.data
    }).catch(error => {
        console.log(error)
    });
}

export type updateData = {
    ID: number,
    Expense: number,
}

export async function fetchUpdate(id: number, expense: number) {
    await axios({
        method : 'UPDATE',
        url    : `${url}/update`,
        headers: {
            "Content-Type": "application/json",
        },
        responseType : 'json',
        data   : {
            ID: id,
            Expense: expense,
        }
    }).then(res => {
        console.log(res.status)
        return res.data
    }).catch(error => {
        console.log(error)
    });
}

export type deleteData = {
    ID: number,
}

export async function fetchDelete(id: number) {
    await axios({
        method : 'DELETE',
        url    : `${url}/delete/${id}`,
        headers: {
            "Content-Type": "application/json",
        },
        responseType : 'json',
    }).then(res => {
        console.log(res.status)
    }).catch(error => {
        console.log(error)
    });
}