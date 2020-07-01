<template>
    <div id="popup">
        <div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="edit" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
                            <h4 class="modal-title custom_align" id="Heading">Modification</h4>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <input class="form-control " type="text" placeholder="Mohsin">
                            </div>
                            <div class="form-group">
                                <input class="form-control " type="text" placeholder="Irshad">
                            </div>
                            <div class="form-group">
                                <textarea rows="2" class="form-control" placeholder="CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan"></textarea>               
                            </div>
                        </div>
                        <div class="modal-footer ">
                            <button type="button" class="btn btn-warning btn-lg" style="width: 100%;"><span class="glyphicon glyphicon-ok-sign"></span> Mise à jour</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="delete" tabindex="-1" role="dialog" aria-labelledby="edit" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
                            <h4 class="modal-title custom_align" id="Heading">Supprimer</h4>
                        </div>
                        <div class="modal-body">        
                            <div class="alert alert-danger"><span class="glyphicon glyphicon-warning-sign"></span> Êtes vous sûr de vouloir supprimer cet enregistrement ?</div>
                        </div>
                        <div class="modal-footer ">
                            <button type="button" class="btn btn-success" ><span class="glyphicon glyphicon-ok-sign"></span>Yes</button>
                            <button type="button" class="btn btn-default" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span>No</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
    export default {
        name: "Modal",
    }
</script>