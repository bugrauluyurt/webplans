Template.addplan.events({
	'submit .add-plan-form': function() {
		var plan_name = event.target.plan_name.value;
		var plan_label = event.target.plan_label.value;
		var days = event.target.days.value;
		var description = event.target.description.value;
		var is_default = event.target.is_default.value;
		var price = event.target.price.value;

		Plans.insert({
			plan_name: plan_name,
			plan_label: plan_label,
			days: days,
			description: description,
			is_default: is_default,
			price: price
		});

		toastr.success('Plan added');

		Router.go('/admin/plans');
		return false;
	}
});