import { useDispatch } from "react-redux";
import { useEffect } from "react";
function useHandleData(data, { addData, editData, deleteData }) {
    const dispatch = useDispatch();
    useEffect(() => {
        if (data) {
            if (data.status === 200 || data.status === 201) {
                switch (data.method) {
                    case "delete": {
                        dispatch(deleteData(data.actionData.id));
                        break;
                    }
                    case "post": {
                        dispatch(addData(data.actionData.data));
                        break;
                    }
                    case "patch": {
                        dispatch(editData(data.actionData));
                        break;
                    }
                }
            }
        }
    }, [data]);
}
export default useHandleData;
