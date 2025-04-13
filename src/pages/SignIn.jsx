import { FormInput } from "../components/FormInput";
import { useSignInForm } from "../features/signin/hooks/useSignInForm";
import { validationRules } from "../utils/validationRule";

export default function SignIn() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useSignInForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<div className="flex justify-center items-center min-h-screen">
			<form
				className="w-full max-w-sm space-y-4"
				onSubmit={handleSubmit(onSubmit)}
			>
				<h2 className="flex justify-center">新規登録</h2>

				<div className="flex gap-2">
					<div className="w-1/2">
						<FormInput
							label="姓"
							id="lastName"
							placeholder="山田"
							register={register}
							validation={validationRules.lastName}
							error={errors.lastName?.message}
						/>
					</div>

					<div className="w-1/2">
						<FormInput
							label="名"
							id="firstName"
							placeholder="太郎"
							register={register}
							validation={validationRules.firstName}
							error={errors.firstName?.message}
						/>
					</div>
				</div>

				<FormInput
					label="メールアドレス"
					id="email"
					type="email"
					placeholder="example@email.com"
					register={register}
					validation={validationRules.email}
					error={errors.email?.message}
				/>

				<FormInput
					label="パスワード"
					id="password"
					type="password"
					placeholder="password"
					register={register}
					validation={validationRules.password}
					error={errors.password?.message}
				/>

				<button
					type="submit"
					className="w-full py-2 bg-blue-500 text-white rounded"
				>
					サインイン
				</button>
			</form>
		</div>
	);
}
