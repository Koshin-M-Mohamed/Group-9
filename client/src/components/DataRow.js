function DataRow({data, className}) {
    return (
        <div>
            <h6 className={className}>{data}</h6>
        </div>
    );
}

export default DataRow;