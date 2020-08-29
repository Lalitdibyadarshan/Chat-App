export interface MapperInterface<T, G> {
	toModel: (param: T) => G;
}
