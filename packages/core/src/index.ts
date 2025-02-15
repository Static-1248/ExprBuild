export type Expression = {
	id: string;
	content: string;
	dependencies: Set<string>;
	isExplicit: boolean;
};

export type ExpressionMap = Map<string, Expression>;

export interface ExprBuilder {
	(strings: TemplateStringsArray, ...exprs: Expression[]): Expression;
}

export type DSLParser = (input: string) => Expression;