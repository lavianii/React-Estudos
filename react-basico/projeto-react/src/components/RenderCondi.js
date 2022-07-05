const RenderCondi = ({x}) => {
    return(
        <div>
            {x > 5 && <p>X é maior que 5</p>}
            {x > 5 ? <p>X é um numero alto</p> : <p>X é um numero baixo</p>}
        </div>
    );
}

export default RenderCondi;